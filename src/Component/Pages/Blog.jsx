import React from "react";
import usetitle from "../DaynamicTitle/usetitle";

const Blog = () => {
  usetitle("Blog");
  return (
    <div className="md:m-12">
      <div>
        <h1 className="text-2xl font-semibold pt-6">
          Qus-1:What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        {/* The button to open modal */}
        <label htmlFor="my-modal" className="btn">
          See Answer
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Ans:</h3>
            <p className="py-4">
              Access Token: A credential that grants a client (e.g., a web or
              mobile application) permission to access specific resources or
              perform actions on behalf of a user. It is issued by an
              authentication server and is used to authenticate and authorize
              the client for a limited period of time.
              <br /> <br />
              Refresh Token: A long-lived credential that allows a client to
              obtain a new access token when the current one expires. It is
              associated with a user's session and is used to request a fresh
              access token without requiring the user to reauthenticate. Refresh
              tokens are typically more persistent than access tokens.
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Ok ,I Read it
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold pt-6">
          Qus-2:Compare SQL and NoSQL databases?
        </h1>
        {/* The button to open modal */}
        <label htmlFor="my-modal1" className="btn">
          See Answer
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal1" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Ans:</h3>
            <p className="py-4">
              SQL databases: SQL databases store data in structured tables with
              predefined columns and data types. They use a standardized query
              language called SQL to interact with and retrieve data. SQL
              databases are suitable for applications that require organized and
              relational data, like traditional business applications and
              systems.
              <br />
              NoSQL databases: NoSQL databases provide a more flexible way to
              store and retrieve data compared to SQL databases. They can handle
              unstructured or semi-structured data, such as documents, key-value
              pairs, or graphs. NoSQL databases use different query mechanisms
              depending on the database technology or data model. They are often
              used in modern applications that deal with large amounts of
              diverse data, like social media platforms or real-time analytics
              systems.
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal1" className="btn">
                Ok ,I Read it
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold pt-6">
          Qus-3:What is express js? What is Nest JS ?
        </h1>
        {/* The button to open modal */}
        <label htmlFor="my-modal2" className="btn">
          See Answer
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal2" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Ans:</h3>
            <p className="py-4">
            Express.js is a popular and lightweight web application framework for Node.js. It provides a robust set of features and tools for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and response handling. It follows a minimalist design philosophy, allowing developers to create scalable and modular applications with ease. Express.js provides a flexible and intuitive API, making it a preferred choice for developers who want to quickly build server-side applications using JavaScript.
              <br /> <br />
              NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and follows the architectural principles of Angular, combining elements of object-oriented programming, functional programming, and reactive programming. NestJS emphasizes the use of decorators, modules, services, and controllers to create a modular and structured codebase. It provides built-in support for features like dependency injection, HTTP routing, middleware, authentication, and more. 
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal2" className="btn">
                Ok ,I Read it
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold pt-6">
          Qus-4:What is MongoDB aggregate and how does it work ?
        </h1>
        {/* The button to open modal */}
        <label htmlFor="my-modal3" className="btn">
          See Answer
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Ans:</h3>
            <p className="py-4">
            In MongoDB, the aggregate operation is a powerful tool that allows you to perform advanced data processing and analysis directly within the database. It works by using a series of stages, which are applied to your data in a specific order.
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal3" className="btn">
                Ok ,I Read it
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
