package com.payment.payment_system.security;

public interface ISecurityUserService {

    String validatePasswordResetToken(long id, String token);

}
