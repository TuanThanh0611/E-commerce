package com.ivo.ecom_backend.service;

import com.ivo.ecom_backend.Enums.Role;
import com.ivo.ecom_backend.dto.request.IntrospectRequest;
import com.ivo.ecom_backend.dto.request.LoginRequest;
import com.ivo.ecom_backend.dto.request.RegisterRequest;
import com.ivo.ecom_backend.dto.request.UserCreateRequest;
import com.ivo.ecom_backend.dto.response.AuthenticationResponse;
import com.ivo.ecom_backend.dto.response.IntrospectResponse;
import com.ivo.ecom_backend.dto.response.UserResponse;
import com.ivo.ecom_backend.entity.User;
import com.ivo.ecom_backend.exception.AppException;
import com.ivo.ecom_backend.exception.ErrorCode;
import com.ivo.ecom_backend.mapper.UserMapper;
import com.ivo.ecom_backend.repository.UserRepository;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.HashSet;
import java.util.StringJoiner;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level= AccessLevel.PRIVATE,makeFinal = true)
public class AuthService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserMapper mapper;
    PasswordEncoder passwordEncoder;
    @NonFinal
    @Value( "${jwt.signerKey}")
    protected String SIGNER_KEY;

    public UserResponse registerUser(RegisterRequest request){
        if(userRepository.existsByEmail(request.getEmail())){
            throw new AppException(ErrorCode.USER_EXISTED);
        }
        User user=mapper.registerRequestToUser(request);

        user.setPassword(passwordEncoder.encode(request.getPassword()));

        HashSet<String> roles = new HashSet<>();
        roles.add(Role.USER.name());

        user.setRoles(roles);

        return mapper.toUserResponse(userRepository.save(user));
    }

    public AuthenticationResponse authenticate(LoginRequest request){
        var user = userRepository.findUsersByEmail(
                        request.getEmail())
                .orElseThrow(() ->new AppException(ErrorCode.USER_NOT_EXISTED));
        PasswordEncoder passwordEncoder=new BCryptPasswordEncoder(7);
        boolean authenticated= passwordEncoder.matches(request.getPassword(),user.getPassword());
        if(!authenticated){
            throw new AppException(ErrorCode.UNAUTHENTICATION);
        }
        String token=generateToken(user);
        if(token==null){
            throw new AppException(ErrorCode.CANT_CREATE_TOKEN);
        }


        return new AuthenticationResponse(token,authenticated);

    }

    public String testToken(LoginRequest request){
        var user = userRepository.findUsersByEmail(
                        request.getEmail())
                .orElseThrow(() ->new AppException(ErrorCode.USER_NOT_EXISTED));
        PasswordEncoder passwordEncoder=new BCryptPasswordEncoder(7);
        boolean authenticated= passwordEncoder.matches(request.getPassword(),user.getPassword());
        if(!authenticated){
            throw new AppException(ErrorCode.UNAUTHENTICATION);
        }
        String tokenn=generateToken(user);
        if(tokenn==null){
            throw new AppException(ErrorCode.CANT_CREATE_TOKEN);
        }
        return tokenn;

    }
    private String generateToken(User user)  {
        JWSHeader header=new JWSHeader(JWSAlgorithm.HS512);
        JWTClaimsSet jwtClaimsSet=new JWTClaimsSet.Builder()
                .subject(user.getEmail())
                .issuer("ivo.com")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(3, ChronoUnit.HOURS).toEpochMilli()
                ))
                .claim("scope",buildScope(user))
                .build();
        Payload payload=new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject=new JWSObject(header,payload);
        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            throw new RuntimeException(e);
        }
    }
    public IntrospectResponse intropect(IntrospectRequest request) throws JOSEException, ParseException {
        var token =request.getToken();
        JWSVerifier verifier=new MACVerifier(SIGNER_KEY.getBytes());
        SignedJWT signedJWT= SignedJWT.parse(token);
        Date expityTime=signedJWT.getJWTClaimsSet().getExpirationTime();
        var verified= signedJWT.verify(verifier);
//       if(!(verified&&expityTime.after(new Date())))
//           throw new AppException(ErrorCode.INVALID_TOKEN);
        return IntrospectResponse.builder()
                .valid(verified&&expityTime.after(new Date())).build();

    }

    private String buildScope(User user){
        StringJoiner stringJoiner = new StringJoiner(" ");
        if (!CollectionUtils.isEmpty(user.getRoles()))
            user.getRoles().forEach(stringJoiner::add);

        return stringJoiner.toString();
    }





}
