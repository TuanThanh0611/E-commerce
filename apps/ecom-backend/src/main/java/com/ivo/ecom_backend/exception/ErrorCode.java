package com.ivo.ecom_backend.exception;

public enum ErrorCode {
    NotNull(1001,"This field not null"),
    MAXLENGTH(1002,"Maximum length is 255"),
    USER_EXISTED(1003,"This user already exists"),
    USER_NOT_EXISTED(1004,"This user is not existed"),;
    private int code;
    private String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
    }

