package dev.backend.server;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "views")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class View {
    @Id
    private ObjectId id;
    private String name;
    private String chartType;
    private String country;
    private String indicator;
    private String startDate;
    private String endDate;
}
