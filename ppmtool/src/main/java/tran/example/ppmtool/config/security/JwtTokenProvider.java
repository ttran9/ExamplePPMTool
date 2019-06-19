package tran.example.ppmtool.config.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import tran.example.ppmtool.domain.applicationuser.ApplicationUser;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static tran.example.ppmtool.constants.security.SecurityConstants.EXPIRATION_TIME;
import static tran.example.ppmtool.constants.security.SecurityConstants.SECRET;

@Component
public class JwtTokenProvider {

    // Generate the token
    public String generateToken(Authentication authentication) {
        ApplicationUser applicationUser = (ApplicationUser) authentication.getPrincipal();
        Date currentDate = new Date(System.currentTimeMillis());

        Date expirationDate = new Date(System.currentTimeMillis() + EXPIRATION_TIME);

        /*
         * the token stores some user attributes but the token is a string.
         * we would have to cast the userId to a string to pass it into the token.
         */
        String userId = Long.toString(applicationUser.getId());

        Map<String, Object> claims = new HashMap<>();
        claims.put("id", userId);
        claims.put("username", applicationUser.getUsername());
        claims.put("fullName", applicationUser.getFullName());

        /*
         * claims is information about the user.
         * can pass in claims one by one or by using a map.
         * note there are many ways to create a signature
         */
        return Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(currentDate)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }

    // Validate the token

    // Get user id from token

}
