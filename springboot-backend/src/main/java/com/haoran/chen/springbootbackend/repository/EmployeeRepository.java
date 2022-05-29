package com.haoran.chen.springbootbackend.repository;

import com.haoran.chen.springbootbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
