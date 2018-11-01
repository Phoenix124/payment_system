package com.payment.payment_system.repository;

import com.payment.payment_system.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    User findByUsername(String username);

    @Override
    void delete(User user);
}

