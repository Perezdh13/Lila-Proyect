package com.app.lilaProject.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name= "questions")
public class CModelQuestions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "ask")
    private String ask;
    @Column(name = "type")
    private String type;
    @Column(name = "value")
    private String value;
    }
