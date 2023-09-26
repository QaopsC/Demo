@login-test
Feature: Validate success and failure login

    Scenario Outline: Validate - Successful and Unnsuccessful Login
        Given The user visit "http://localhost:8989"
        When The user logs in with username: <username> and password: <password>
        Then The sign <sign> with the message <message> should be visible

        Examples:
            | username        | password    | sign          | message                                                                 |
            | "administrator" | "wrongpass" | "warningSign" | "el nombre de usuario y la contraseña proporcionados sean incorrectos." |
            | "wronguser"     | "root"      | "warningSign" | "el nombre de usuario y la contraseña proporcionados sean incorrectos." |
            | "administrator" | "root"      | "loginSign"   | "administrator"                                                         |