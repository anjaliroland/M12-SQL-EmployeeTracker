INSERT INTO departments (name)
VALUES ("Parks and Rec"),
       ("Fire"),
       ("Library"),
       ("Education"),
       ("Health");

INSERT INTO roles (title, salary, department_id)
VALUES ("Director", 110000, 1),
       ("Deputy Director", 95000, 1),
       ("Intern", 5000, 1),
       ("Administrator", 60000, 1),
       ("Fire Chief", 115000, 2),
       ("Librarian", 60000, 3),
       ("Superintendent", 90000, 4),
       ("PR Director", 70000, 5);





INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Ron", "Swanson", 1, null),
       ("Leslie", "Knope", 2, 1),
       ("April", "Ludgate", 3, 1),
       ("Tom", "Haverford", 4, 1),
       ("Al", "Connor", 5, null),
       ("Tammy II", "Swanson", 6, 1),
       ("Marlene", "Griggs-Knope", 7, null),
       ("Ann", "Perkins", 8, null);