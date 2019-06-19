package tran.example.ppmtool.constants.security;

public class SecurityConstants {

    public static final String SIGN_UP_URLS = "/api/users/**";
    public static final String H2_URL = "/h2-console/**";
    public static final String SECRET = "Secret"; // TODO: will refactor this with a more secure implementation
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = 300000; // in milliseconds so 300 seconds / 5mins.

}
