import React from "react";

const Faq = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">Have Doubts? Read FAQs</h2>
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What does telemedicine mean?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Remote medical services, diagnosing and treating patients
                  without consulting them in-person, is called telemedicine.
                  Telemedicine, also called online doctor visits, allows
                  patients to consult doctors from around the world without
                  having to travel anywhere.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What is telemedicine used for?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  While there are innumerable uses of telemedicine, they are
                  commonly used for: A second opinion. Follow-up visits.
                  Managing patients with chronic illnesses. Post-surgical care.
                  Healthy living and preventive care. Caring for geriatric
                  patients living in nursing homes.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What equipment do you require for telemedicine?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  For consulting a doctor online, you will require: A computer,
                  with a microphone, a camera, and an internet connection. Or a
                  smartphone with an internet connection.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
