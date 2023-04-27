package com.app.lilaProject.DTO;

import jakarta.persistence.Column;

public class CUserDto {

    private long id;

    private String name;

    private String imgReal;

    private String imgCartoon;

    private String description;

    private String eyes;

    private String hair;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgReal() {
        return imgReal;
    }

    public void setImgReal(String imgReal) {
        this.imgReal = imgReal;
    }

    public String getImgCartoon() {
        return imgCartoon;
    }

    public void setImgCartoon(String imgCartoon) {
        this.imgCartoon = imgCartoon;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEyes() {
        return eyes;
    }

    public void setEyes(String eyes) {
        this.eyes = eyes;
    }

    public String getHair() {
        return hair;
    }

    public void setHair(String hair) {
        this.hair = hair;
    }

    public CUserDto(long id, String name, String imgReal, String imgCartoon, String description, String eyes, String hair) {
        this.id = id;
        this.name = name;
        this.imgReal = imgReal;
        this.imgCartoon = imgCartoon;
        this.description = description;
        this.eyes = eyes;
        this.hair = hair;
    }

    public CUserDto() {
    }
}
