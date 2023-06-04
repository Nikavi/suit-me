import React, { useState } from "react";
import "./Measurements.css";
import backgroundImage from "./images/womenmeasurements.jpg";
import mensMeasurementsImage from "./images/mensmeasurements.jpeg";

const Measurements = () => {
  const [results, setResults] = useState(null);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [chest, setChest] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const handleSubmit = () => {
    const generatedResults = {
      chest: chest,
      waist: waist,
      hips: hips,
      clothingSize: calculateClothingSize(chest, waist, hips),
    };

    setResults(generatedResults);
    setShowResults(true);
  };

  const calculateClothingSize = (chest, waist, hips) => { 
    if (chest < 80 && waist < 62 && hips < 86) {
      return "XS - 34(EU) 4(UK) 0(US)";
    } else if (chest < 84 && waist < 66 && hips < 92) {
      return "S - 36(EU) 6(UK) 2(US)";
    } else if (chest < 88 && waist < 70 && hips < 96) {
      return "M - 38(EU) 8(UK) 4(US)";
    } else if (chest < 92 && waist < 74 && hips < 100) {
      return "L - 40(EU) 10(UK) 6(US)";
    } else if (chest < 96 && waist < 78 && hips < 104) {
      return "XL - 42(EU) 12(UK) 8(US)";
    } else if (chest < 100 && waist < 82 && hips < 108) {
      return "XXL - 46(EU) 14(UK) 10(US)";
    } else {
      return "XXXL - 48(EU) 16(UK) 12(US)";
    }
  };

  const handleReset = () => {
    setResults(null);
    setHeight("");
    setWeight("");
    setWaist("");
    setHips("");
    setChest("");
    setShowResults(false);
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-measurements-container">
          {!showResults && (
            <>
              <div className="measurements-description">
                <div className="measurements-text">
                  <h2>Remember</h2>
                  <div>
                    <h3> Bust </h3>
                    <p>
                      1. Wearing a bra, pass the tape measure straight across
                      your back, under your arms and over the fullest point of
                      your bust.
                    </p>
                    <h3>Waist</h3>
                    <p>
                      2. Pass the tape measure around your natural waistline, at
                      the narrowest point of your waist. The tape measure should
                      sit snugly against your body, but should not be pulled too
                      tight.
                    </p>
                    <h3>Hips </h3>
                    <p>
                      3. Pass the tape measure across your hipbone, around the
                      fullest point of your hips.
                    </p>
                  </div>
                </div>
                <div className="measurements-table">
                  <h3>Enter Your Body Measurements</h3>
                  <p>Enter your body measurements below to get started:</p>
                  <table>
                    <thead>
                      <tr>
                        <th>Measurement</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Height (cm)</td>
                        <td>
                          <input
                            type="number"
                            id="height"
                            name="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Weight (kg)</td>
                        <td>
                          <input
                            type="number"
                            id="weight"
                            name="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td> Bust(cm) </td>
                        <td>
                          <input
                            type="number"
                            id="chest"
                            name="chest"
                            value={chest}
                            onChange={(e) => setChest(e.target.value)}
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td> Waist(cm)</td>
                        <td>
                          <input
                            type="number"
                            id="waist"
                            name="waist"
                            value={waist}
                            onChange={(e) => setWaist(e.target.value)}
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td> Hips(cm) </td>
                        <td>
                          <input
                            type="number"
                            id="hips"
                            name="hips"
                            value={hips}
                            onChange={(e) => setHips(e.target.value)}
                            required
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="popup-button" onClick={handleSubmit}>
                    Calculate
                  </button>
                </div>
              </div>
            </>
          )}

          {showResults && (
            <>
              <div className="result-popup">
                <div className="result-container">
                  <div className="result-image-left">
                    <img
                      src={backgroundImage}
                      alt=""
                      className="result-image"
                    />
                  </div>
                  <div className="result-content">
                    <h3>Results</h3>
                    <table>
                      <thead>
                        <tr>
                          <th>Measurement</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Height (cm)</td>
                          <td>{height}</td>
                        </tr>
                        <tr>
                          <td>Weight (cm)</td>
                          <td>{weight}</td>
                        </tr>
                        <tr>
                          <td>Bust (cm)</td>
                          <td>{chest}</td>
                        </tr>
                        <tr>
                          <td>Waist (cm)</td>
                          <td>{waist}</td>
                        </tr>
                        <tr>
                          <td>Hips (cm)</td>
                          <td>{hips}</td>
                        </tr>
                        <tr className="your-size">
                          <td>Recommended Clothing Size</td>
                          <td>{results.clothingSize}</td>
                        </tr>
                      </tbody>
                    </table>
                    <h4>Size Chart</h4>
                    <table>
                      <thead>
                        <tr>
                          <th scope="row"></th>
                          <th scope="col">XS</th>
                          <th scope="col">S</th>
                          <th scope="col">M</th>
                          <th scope="col">L</th>
                          <th scope="col">XL</th>
                          <th scope="col">XXL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">EU</th>
                          <td>40-42</td>
                          <td>44-46</td>
                          <td>48-50</td>
                          <td>52-54</td>
                          <td>56-58</td>
                          <td>60-62</td>
                        </tr>
                        <tr>
                          <th scope="row">UK</th>
                          <td>30-32</td>
                          <td>34-36</td>
                          <td>38-40</td>
                          <td>42-44</td>
                          <td>46-48</td>
                          <td>50-52</td>
                        </tr>
                        <tr>
                          <th scope="row">US</th>
                          <td>28-29</td>
                          <td>29-30</td>
                          <td>30-32</td>
                          <td>32-34</td>
                          <td>34-36</td>
                          <td>36-38</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="result-image-right">
                    <img
                      src={mensMeasurementsImage}
                      alt=""
                      className="result-image"
                    />
                  </div>
                </div>
                <button className="popup-button" onClick={handleReset}>
                  Good Shopping!
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Measurements;
