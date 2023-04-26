package com.app.lilaProject.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name= "woman")
public class Woman {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "id", nullable = false)
    private long id;
    @Column (name = "name", nullable = false)
    private String name;
    @Column (columnDefinition = "LONGTEXT")
    private String imgReal;
    @Column (columnDefinition = "LONGTEXT")
    private String imgCartoon;
    @Column (name = "description", nullable = false)
    private String description;
    @Column(name = "eyes", nullable = false)
    private String eyes;
    @Column(name="hair", nullable = false)
    private String hair;

}
