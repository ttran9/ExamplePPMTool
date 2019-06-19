package tran.example.ppmtool.web.applicationusers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tran.example.ppmtool.domain.applicationuser.ApplicationUser;
import tran.example.ppmtool.services.applicationusers.ApplicationUserService;
import tran.example.ppmtool.services.validations.MapValidationErrorService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class ApplicationUserController {

    private ApplicationUserService applicationUserService;

    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    public ApplicationUserController(ApplicationUserService applicationUserService, MapValidationErrorService mapValidationErrorService) {
        this.applicationUserService = applicationUserService;
        this.mapValidationErrorService = mapValidationErrorService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody ApplicationUser applicationUser, BindingResult bindingResult) {
        // validate that passwords match.

        ResponseEntity<?> errorMap = mapValidationErrorService.outputCustomError(bindingResult);
        if(errorMap != null) return errorMap;

        ApplicationUser newApplicationUser = applicationUserService.saveUser(applicationUser);

        return new ResponseEntity<>(newApplicationUser, HttpStatus.CREATED);
    }
}
