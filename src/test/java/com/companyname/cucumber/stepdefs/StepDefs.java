package com.companyname.cucumber.stepdefs;

import com.companyname.FullstacktempApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = FullstacktempApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
