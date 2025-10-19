package com.example.emp_backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class ResourceNotFooundException extends RuntimeException{
    public ResourceNotFooundException(String message){
        super(message);
    }
}
