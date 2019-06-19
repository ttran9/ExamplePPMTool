package tran.example.ppmtool.constants.security;

import org.springframework.beans.factory.annotation.Value;

public class SecurityConstants {

    public static final String SIGN_UP_URLS = "/api/users/**";
    public static final String H2_URL = "/h2-console/**";
    @Value("${JWTSuperSecretKey}")
    public static final String SECRET = ""; // TODO: will refactor this with a more secure implementation
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = 30000; // in milliseconds so 30 seconds.

}
