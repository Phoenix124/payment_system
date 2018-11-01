package com.payment.payment_system.task;

import com.payment.payment_system.repository.PasswordResetTokenRepository;
import com.payment.payment_system.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.Date;

@Service
@Transactional
public class TokensPurgeTask {

    final TokenRepository tokenRepository;

    final PasswordResetTokenRepository passwordTokenRepository;

    @Autowired
    public TokensPurgeTask(TokenRepository tokenRepository, PasswordResetTokenRepository passwordTokenRepository) {
        this.tokenRepository = tokenRepository;
        this.passwordTokenRepository = passwordTokenRepository;
    }

    @Scheduled(cron = "${purge.cron.expression}")
    public void purgeExpired() {

        Date now = Date.from(Instant.now());

        passwordTokenRepository.deleteAllExpiredSince(now);
        tokenRepository.deleteAllExpiredSince(now);
    }
}
