import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;

      case "ADD_BLOG":
        this.setState({
          blogs: [newObject, ...this.state.blogs],
        });
        break;

      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;

      default:
    }
  };

  state = {
    handler: this.handler,
    skills: [
      {
        id: 1,
        name: "html5",
        imageUrl:
          "https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "Css3",
        imageUrl:
          "https://i.pinimg.com/originals/a9/dc/c7/a9dcc740cad3149598307b5de8bc10c3.jpg",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 3,
        name: "javascript",
        imageUrl:
          "https://www.freepnglogos.com/uploads/javascript/javascript-web-development-for-app-mobile-4.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 4,
        name: "Bootstrap4",
        imageUrl:
          "data:image/jpeg;base64,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",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 5,
        name: "React.js",
        imageUrl:
          "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 6,
        name: "mysql",
        imageUrl:
          "https://spng.subpng.com/20180803/bx/kisspng-mysql-database-image-vector-graphics-integrations-opsview-5b648f451747c6.6957402115333169330954.jpg",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 7,
        name: "python",
        imageUrl:
          "https://qph.cf2.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 8,
        name: "Flask",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zAzokuDX3E94TGg6fJECRMER1kgiChb7YT8aMfppggTrGb6I9t7T4hne4appa7_5-yg&usqp=CAU",
        starsTotal: 3,
        starsActive: 2,
      },
    ],
    recommendations: [
      {
        id: 1,
        name: "ISHI 😍",
        company: "ABC company",
        designation: "https://www.shoneekapoor.com/wp-content/uploads/2020/05/WillTitre-1.png",
        message: "WILL",
      },
      {
        id: 2,
        name: "I REALLY WANT YOU 🥰",
        company: "ABC company",
        designation: "https://static6.depositphotos.com/1157310/657/v/450/depositphotos_6578401-stock-illustration-pointing-the-finger.jpg",
        message: "YOU",
      },
      {
        id: 3,
        name: "IN MY LIFE❤",
        company: "ABC company",
        designation: "https://partydost.com/wp-content/uploads/2021/08/272356589_298512885662506_7763411377632027083_n.jpg",
        message: "MARRY ME",
      },
      {
        id: 4,
        name: "Random guy 4",
        company: "ABC company",
        designation: "SDE",
        message: "He gets things done so quikly",
      },
    ],
    blogs: [
      {
        id: 1,
        title: "BACHELOR PARTY",
        imageUrl:
          "http://www.coffeecreamthemes.com/themes/perfectcouple/wordpress/wp-content/uploads/2014/10/event2.jpg",
        date: "JULY 7TH, 2014",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet pharetra nunc, non scelerisque ligula. Cras vel justo nulla. Vestibulum a sollicitudin metus, faucibus fermentum leo.",
      },
      {
        id: 2,
        title: "BACHELORETTE PARTY",
        imageUrl:
          "http://www.coffeecreamthemes.com/themes/perfectcouple/wordpress/wp-content/uploads/2014/10/event3.jpg",
        date: "JULY 7TH, 2014",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet pharetra nunc, non scelerisque ligula. Cras vel justo nulla. Vestibulum a sollicitudin metus, faucibus fermentum leo.",
      },
      {
        id: 3,
        title: "DINNER REHERSAL",
        imageUrl:
          "http://www.coffeecreamthemes.com/themes/perfectcouple/wordpress/wp-content/uploads/2014/10/event4.jpg",
        date: "JULY 7TH, 2014",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet pharetra nunc, non scelerisque ligula. Cras vel justo nulla. Vestibulum a sollicitudin metus, faucibus fermentum leo.",
      },
      {
        id: 4,
        title: "WEDDING CEREMONY",
        imageUrl:
          "http://www.coffeecreamthemes.com/themes/perfectcouple/wordpress/wp-content/uploads/2014/10/event5.jpg",
        date: "JULY 7TH, 2014",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet pharetra nunc, non scelerisque ligula. Cras vel justo nulla. Vestibulum a sollicitudin metus, faucibus fermentum leo.",
      },
    ],
    projects: [
      {
        id: 1,
        title: "WE’VE MET",
        imageUrl:
          "https://media.istockphoto.com/id/1093508248/photo/modern-work-table-with-computer-laptop-and-cityscapes-view-from-window-business-concepts-ideas.jpg?s=612x612&w=0&k=20&c=vpMc1UR6KfgPe4GYcFG4x1FfPKLyYsoKqrAJolfBSZs=",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec convallis ipsum, et pharetra dolor. Praesent dignissim viverra metus sed fermentum. Nam ultricies felis ac augue convallis porttitor. Praesent enim erat, semper quis mollis eget, pharetra eu ligula. Integer commodo fringilla augue id ultricies. Maecenas vel tincidunt enim.",
        body: "Body 1",
      },
      {
        id: 2,
        title: "FIRST DATE",
        imageUrl:
          "https://previews.123rf.com/images/halfpoint/halfpoint1502/halfpoint150200335/36634837-office-desk.jpg",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec convallis ipsum, et pharetra dolor. Praesent dignissim viverra metus sed fermentum. Nam ultricies felis ac augue convallis porttitor. Praesent enim erat, semper quis mollis eget, pharetra eu ligula. Integer commodo fringilla augue id ultricies. Maecenas vel tincidunt enim.",
        body: "Body 2",
      },
      {
        id: 3,
        title: "FIRST K**S",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQ5U1eLHXOy-QUCv4ZQFa2vq1bDxvSbfxE9Hu9lJZ8zsJLCcQJ9sb6Npu7pKRK7tStgE&usqp=CAU",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec convallis ipsum, et pharetra dolor. Praesent dignissim viverra metus sed fermentum. Nam ultricies felis ac augue convallis porttitor. Praesent enim erat, semper quis mollis eget, pharetra eu ligula. Integer commodo fringilla augue id ultricies. Maecenas vel tincidunt enim.",
        body: "Body 3",
      },
      {
        id: 4,
        title: "ENGAGEMENT",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQ5U1eLHXOy-QUCv4ZQFa2vq1bDxvSbfxE9Hu9lJZ8zsJLCcQJ9sb6Npu7pKRK7tStgE&usqp=CAU",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec convallis ipsum, et pharetra dolor. Praesent dignissim viverra metus sed fermentum. Nam ultricies felis ac augue convallis porttitor. Praesent enim erat, semper quis mollis eget, pharetra eu ligula. Integer commodo fringilla augue id ultricies. Maecenas vel tincidunt enim.",
        body: "Body 4",
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
