import Header from "../components/Header";
 
const AuthorPage = () => {
  return ( 
    <div>
      <Header/>
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">About the Author: Anshuman</h1>
          
          <img src="./img/author.jpg" className="hero-image" alt="" />
          <div className="blog-content">
            <p className="blog-text">Anshuman started web development when he was in class 9th,at that he used to write HTML code on notepad , he doesn't know about IDE like Vscode,atom. In class 9th he was only knowing about HTML and css, using them he was able to create simple websites and he have created the Tesla clone website. Now he know various framework with that he can make beautiful websites. Now he is learning nodejs for backend development. He is interested in web 3.0, He is exploring in that domain also. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AuthorPage;