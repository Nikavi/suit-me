import React, { useState } from "react";
import "./Measurements.css";

const Measurements = () => {
  const [results, setResults] = useState(null);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [chest, setChest] = useState("");
  const [showResults, setShowResults] = useState(false);

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
    if (chest < 82 && waist < 62 && hips < 88) {
      return "XXS - 36";
    } else if (chest < 85 && waist < 65 && hips < 91) {
      return "XS - 38";
    } else if (chest < 89 && waist < 69 && hips < 95) {
      return "S - 40";
    } else if (chest < 93 && waist < 73 && hips < 99) {
      return "M - 42";
    } else if (chest < 97 && waist < 77 && hips < 103) {
      return "L - 44";
    } else if (chest < 101 && waist < 81 && hips < 107) {
      return "XL - 46";
    } else if (chest < 106 && waist < 86 && hips < 112) {
      return "XXL - 48";
    } else {
      return "XXXL - 50";
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
  };

  return (
    <div className="popup-measurements-container">
      {!showResults && (
        <>
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
              <tr>
                <td> Chest(cm) </td>
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
            </tbody>
          </table>
          <button className="popup-button" onClick={handleSubmit}>
            Calculate
          </button>
        </>
      )}

      {showResults && (
        <>
          <div className="result-popup">
            <div className="popup-content">
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
                    <td>Waist (cm)</td>
                    <td>{waist}</td>
                  </tr>
                  <tr>
                    <td>Hips (cm)</td>
                    <td>{hips}</td>
                  </tr>
                  <tr>
                    <td>Chest (cm)</td>
                    <td>{chest}</td>
                  </tr>
                  <tr>
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
              <button className="popup-button" onClick={handleReset}>
                Good Shopping!
              </button>
              <br/>
              <h3>Congratulations!</h3>
              <p>You have completed the first step.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Measurements;
