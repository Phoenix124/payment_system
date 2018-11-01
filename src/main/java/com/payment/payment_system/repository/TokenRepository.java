package com.payment.payment_system.repository;

import com.payment.payment_system.domain.Token;
import com.payment.payment_system.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.stream.Stream;

public interface TokenRepository extends JpaRepository<Token, Long> {

    Token findByToken(String token);

    Token findByUser(User user);

    Stream<Token> findAllByExpiryDateLessThan(Date now);

    void deleteByExpiryDateLessThan(Date now);

    @Modifying
    @Query("delete from Token t where t.expiryDate <= ?1")
    void deleteAllExpiredSince(Date now);
}
