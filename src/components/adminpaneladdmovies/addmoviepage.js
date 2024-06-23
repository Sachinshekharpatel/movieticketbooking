import React, { useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import axios from "axios";
const CustomMovie = () => {
  const [formData, setFormData] = useState({
    actors: [],
    country: "",
    title: "",
    plot: "",
    director: "",
    genre: [],
    year: "",
    poster: "",
    language: "",
    rating: "",
    runtime: "",
    trailer: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      actors: formData.actors,
      country: formData.country,
      title: formData.title,
      plot: formData.plot,
      director: formData.director,
      genre: formData.genre,
      year: formData.year,
      poster: formData.poster,
      language: formData.language,
      rating: formData.rating,
      runtime: formData.runtime,
      trailer: formData.trailer,
    };
    console.log("Form Data:", data);
    // Handle form submission (e.g., send data to server)

    try {
      axios
        .post(
          "https://dcathelone-default-rtdb.firebaseio.com/moviesAddedByAdmin.json",
          data
        )
        .then((response) => {
          console.log(response.data);
          const realdata = {
            actors: formData.actors,
            country: formData.country,
            title: formData.title,
            plot: formData.plot,
            director: formData.director,
            genre: formData.genre,
            year: formData.year,
            poster: formData.poster,
            language: formData.language,
            rating: formData.rating,
            runtime: formData.runtime,
            trailer: formData.trailer,
            id: response.data.name,
          };

          axios.put(
            `https://dcathelone-default-rtdb.firebaseio.com/moviesAddedByAdmin/${response.data.name}.json`,
            realdata
          );

          alert("Movie Added");
          setFormData({
            actors: [],
            country: "",
            title: "",
            plot: "",
            director: "",
            genre: [],
            year: "",
            poster: "",
            language: "",
            rating: "",
            runtime: "",
            trailer: "",
          });
        });
    } catch (error) {
      console.log("movies data not added ", "api error");
    }
  };

  return (
    <>
      <Header></Header>
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Movie</h2>
        <form onSubmit={handleSubmit}>
          <label className="block  text-gray-700 font-bold mb-2">Actors:</label>
          <input
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            value={formData.actors}
            onChange={(e) =>
              setFormData({ ...formData, actors: [e.target.value] })
            }
          />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Country:
          </label>
          <input
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            required
            className="w-full mt-2 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <label className="block text-gray-700 font-bold mb-2">Title:</label>
          <input
            required
            className="w-full  px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Plot:
          </label>
          <input
            value={formData.plot}
            onChange={(e) => setFormData({ ...formData, plot: e.target.value })}
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Director:
          </label>
          <input
            value={formData.director}
            onChange={(e) =>
              setFormData({ ...formData, director: e.target.value })
            }
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Genre :
          </label>
          <input
            value={formData.genre}
            onChange={(e) =>
              setFormData({ ...formData, genre: [e.target.value] })
            }
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Year :
          </label>
          <input
            type="number"
            required
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Poster:
          </label>
          <input
            type="url"
            required
            value={formData.poster}
            onChange={(e) =>
              setFormData({ ...formData, poster: e.target.value })
            }
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />

          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Language
          </label>
          <input
            required
            value={formData.language}
            onChange={(e) =>
              setFormData({ ...formData, language: e.target.value })
            }
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Rating:
          </label>
          <input
            max={10}
            min={1}
            type="number"
            required
            value={formData.rating}
            onChange={(e) =>
              setFormData({ ...formData, rating: e.target.value })
            }
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Runtime:( in minutes) :
          </label>
          <input
            required
            type="number"
            max={300}
            min={10}
            value={formData.runtime}
            onChange={(e) =>
              setFormData({ ...formData, runtime: e.target.value })
            }
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <label className="block  mt-2 text-gray-700 font-bold mb-2">
            Trailer:
          </label>
          <input
            type="url"
            required
            value={formData.trailer}
            onChange={(e) =>
              setFormData({ ...formData, trailer: e.target.value })
            }
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            {" "}
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CustomMovie;
