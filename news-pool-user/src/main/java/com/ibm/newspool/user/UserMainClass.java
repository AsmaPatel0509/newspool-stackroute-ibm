package com.ibm.newspool.user;

import javax.servlet.Filter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;

import com.ibm.newspool.user.jwtfilter.AuthFilter;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@PropertySource("classpath:dbconfig.properties")
public class UserMainClass {

	@Bean
	public FilterRegistrationBean jwtFilter() {
		FilterRegistrationBean<Filter> bean = new FilterRegistrationBean<>();
		bean.setFilter(new AuthFilter());
		bean.addUrlPatterns("/articles/bookmarks/*");
		return bean;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(UserMainClass.class, args);
	}
}
