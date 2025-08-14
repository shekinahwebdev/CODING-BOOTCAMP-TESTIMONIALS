import "./App.css";

const App = () => {
  const userInfo = {};

  return (
    <main className="main_app">
      <div className="image_slider">
        <div className="slider">
          <div className="slider_item">
            <img src="/images/slider1.jpg" alt="Slider 1" />
          </div>
          <div className="slider_item">
            <img src="/images/slider2.jpg" alt="Slider 2" />
          </div>
          <div className="slider_item">
            <img src="/images/slider3.jpg" alt="Slider 3" />
          </div>
        </div>
      </div>

      <div className="testimonial_section">
        <p className="testimonial_text">
          "This coding bootcamp has transformed my career! The instructors are
        </p>
      </div>
    </main>
  );
};

export default App;
