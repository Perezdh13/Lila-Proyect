package com.app.lilaProject.Model;

import jakarta.persistence.*;
import lombok.*;




    @Entity
    @Table(name = "/woman")
    public class CModelWoman {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id", nullable = false)
        private long id;
        @Column(name = "name", nullable = false)
        private String name;
        @Column(columnDefinition = "LONGTEXT")
        private String imgReal;
        @Column(columnDefinition = "LONGTEXT")
        private String imgCartoon;
        @Column(name = "description", nullable = false)
        private String description;
        @Column(name = "eyes", nullable = false)
        private String eyes;
        @Column(name = "hair", nullable = false)
        private String hair;

        public CModelWoman() {
        }

        public void setId(long id) {
            this.id = id;
        }

        public void setName(String name) {
            this.name = name;
        }

        public void setImgReal(String imgReal) {
            this.imgReal = imgReal;
        }

        public void setImgCartoon(String imgCartoon) {
            this.imgCartoon = imgCartoon;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public void setEyes(String eyes) {
            this.eyes = eyes;
        }

        public void setHair(String hair) {
            this.hair = hair;
        }

    }

