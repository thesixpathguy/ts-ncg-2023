package dev.backend.server;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ViewService {

    @Autowired
    private ViewRepository viewRepository;

    public List<View> allViews() {
        return viewRepository.findAll();
    }

    public View view(ObjectId id) {
        return viewRepository.findById(id).get();
    }

    public View create(View view) {
        return viewRepository.save(view);
    }

    public View update(ObjectId id, View view) {
        View foundView = viewRepository.findById(id).get();
        foundView.setName(view.getName());
        foundView.setChartType(view.getChartType());
        foundView.setCountry(view.getCountry());
        foundView.setIndicator(view.getIndicator());
        foundView.setStartDate(view.getStartDate());
        foundView.setEndDate(view.getEndDate());
        return viewRepository.save(foundView);
    }

    public void delete(ObjectId id) {
        viewRepository.deleteById(id);
    }
}
