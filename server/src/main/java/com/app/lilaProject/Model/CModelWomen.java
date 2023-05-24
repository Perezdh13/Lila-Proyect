package com.app.lilaProject.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name= "women")
public class CModelWomen {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "name")
    private String name;
    @Column(columnDefinition = "LONGTEXT")
    private String imgReal;
    @Column(columnDefinition = "LONGTEXT")
    private String imgCartoon;
    @Column(name = "description", columnDefinition = "LONGTEXT")
    private String description;
    @Column(name = "ojos")
    private String ojos;
    @Column(name = "pelo")
    private String pelo;

    
}
