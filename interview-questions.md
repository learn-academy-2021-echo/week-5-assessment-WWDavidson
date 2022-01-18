# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a block in Ruby?

  Your answer:
Blocks in Ruby are basically just conditonal statements and methods of iteration. They include while, do/end, each, .map, and select.
  
  Researched answer:
Ruby blocks are anonymous functions that can be passed into methods. Blocks can be enclosed in a do/end statement if you're writing multiple lines of code or curly braces if you're writing a single line of code. Blocks can take in multiple arguments and said arguments are defined between two pipe characters, such as; "|value|". A block is always invoked with a funciton or a method call if it's in a class. 

2. What is a gem?
  Your answer:
  Ruby Gems are packages for Ruby framework similar to yarn in JavaScript. Gems include things like RSPEC. Gems can also be installed globally on MacOS.

  Researched answer:
  Gems are open source libraries that contain Ruby code. They contain functionality that can be invoked by a Ruby program, and contain things like tests (RSPEC) and active record.


3. What is Ruby on Rails?

  Your answer:
  Ruby on Rails is a full stack program that is written in Ruby language. It can be used for things like Active Record and data storage as well as HTML, CSS, and Javascripiut to create a UI.  

  Researched answer:
Ruby on Rails, also known as Rails, is a free program for web development that includes all the necessities to create an app or website from frontend to backend. It is written in Ruby language and is divied into three subsystems; Model (Active Record), View (Action View), and Controller (Action Controller).
    Model, or Active Record, maintains the relationship between the objects and the database. It handles validation, association, transactions, and more. Active Record provides an interface between the tables in a database and the Ruby program code that manipulates database records. 
   
    View, or Action View, is a presentation of data in a particular format. It's triggered by a controller's decison to present the data. 

    Controller, or Action Controller, is the piece of the app that "directs traffic" or organizes the data. It is an intermediary between Active Record and Action View.





4. What is a relational database? Are there other kinds of databases?

  Your answer:
  A relational database is where objects are stored in columns and rows. A good visual example would be Mircosoft Excel. 

  Researched answer:
  A relational database is a collection of data items that are related to one another. They are organzied as a set of tables, by columns and row. 
  Easch row in the table is a record with a unique id or key. Columns of the table hold attributes of the object. 
  
  There are other type of databases. They include NoSQL databases, which includes any database that doesn't use SQL as it's primary access language. NoSQL databases are sometimes referred to as non-relational databases. An example would be Apache Cassandra or CouchBase.
    
  Another type is a cloud database, and that refers to any database that is designed to run in the cloud. An example of a cloud database would be MicroSoft Azure SQL Database or, Amazon Relational Database. 
  
  Another type are Columnar databases, also referred to as column data store. They store data in columns rather than rows and are often used in data warehouses. Some examples would be Google BigQuery, and Azure SQL Data Warehouse. 
  
  There are also wide column databases, object oriented databases, key-value databases, hierarchial databases, Document databases, graph databases, and time series databases.

5. What are primary keys? Why are they important?

  Your answer:
  Primary keys are how we identifty things in Active Record. It is created by SQL when making tables of data,

  Researched answer:

Primary key identifies each record in a table. A table can only have one primary key  and it can be made of single or multiple columns. I primary that consists real world observables is called a natural key. There are also surrogate keys which function as a key and are not used for id purposes outside the database. Primary keys are identified in SQL by the PRIMARY KEY constraint. 





## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes:

REST stands for Representatuinal State Transfer. RESTful routing is a set of standards used in many different languages to create efficient and reuable routes. It mixes HTTP methods and CRUD actions together so that it's easier for other developers to understand and navigate and app and it's results. 


2. JSON:

JSON, or JavaScript Object Notation,  is a data-interchanging format that is easy for humans to read and write. It's also easy for machines to generatge and is based on a subset of the JS language. 
JSON is built on two structures. A collection of name/value pairs and an ordered list of values. 

3. ERB:
  ERB stands for Epic Rap Battles of History..Just kidding thats the first thing that popped up when Googling "ERB".

  Anyways, ERB is a feature of Ruby that enables you to generate any kind of text, in any quantity, from "ERB templates". ERB templates combine Ruby code with plain text. The Ruby code is for variable substitution and flow control. 

4. Params:
Params, a keyword, is a way that a developer can specify a method parameter that takes a variable number of arguments. It also allows you to call a function with no arguments. You can use params when the number of arguments can range from 0 to infinity.

5. API:
API, short for application programming interface, is a set of definitions and protocols for building and integrating app software. An API is a platform that allows different pieces of software or applications to communicate with one another. An example would be PayPal or weather snippets, which are found on every platform. To specify, the weather snippest are the dedicated boxes that are found when one Googles `weather for ${currentCity}` or the weather app on Apple products.
