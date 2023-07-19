package dev.backend.server;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/view")
public class ViewController {

    @Autowired
    private ViewService viewService;

    /*
    Method: GET
    Endpoint: /view
    */
    @GetMapping
    public ResponseEntity<List<View>> getAllViews() {
        return new ResponseEntity<List<View>>(viewService.allViews(), HttpStatus.OK);
    }

    /*
    Method: GET
    Endpoint: /view/{id}
    */
    @GetMapping("/{id}")
    public ResponseEntity<View> getViewById(@PathVariable ObjectId id) {
        return new ResponseEntity<View>(viewService.view(id), HttpStatus.OK);
    }

    /*
    Method: POST
    Endpoint: /view
    */
    @PostMapping
    public ResponseEntity<View> createViewById(@RequestBody View newView) {
        return new ResponseEntity<View>(viewService.create(newView), HttpStatus.CREATED);
    }

    /*
    Method: PUT
    Endpoint: /view/{id}
    */
    @PutMapping("/{id}")
    public ResponseEntity<View> updateViewById(@PathVariable ObjectId id, @RequestBody View updatedView) {
        return new ResponseEntity<View>(viewService.update(id, updatedView), HttpStatus.OK);
    }

    /*
    Method: DELETE
    Endpoint: /view/{id}
    */
    @DeleteMapping("/{id}")
    public void deleteViewById(@PathVariable("id") ObjectId id) {
        viewService.delete(id);
    }
}
