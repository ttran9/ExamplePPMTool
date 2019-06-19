package tran.example.ppmtool.services.applicationusers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tran.example.ppmtool.domain.applicationuser.ApplicationUser;
import tran.example.ppmtool.repositories.applicationusers.ApplicationUserRepository;

@Service
public class ApplicationUserServiceImpl implements ApplicationUserService {

    private ApplicationUserRepository applicationUserRepository;

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public ApplicationUserServiceImpl(ApplicationUserRepository applicationUserRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.applicationUserRepository = applicationUserRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public ApplicationUser saveUser(ApplicationUser newApplicationUser) {
        newApplicationUser.setPassword(bCryptPasswordEncoder.encode(newApplicationUser.getPassword()));

        // username has to be unique (custom exception if this is violated)

        // make sure that password and confirm password match.

        // we don't persist or show the confirm password.

        return applicationUserRepository.save(newApplicationUser);
    }
}
