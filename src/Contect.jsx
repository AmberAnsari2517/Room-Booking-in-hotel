import React from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { Footer } from './footer';
import { contect } from './Asset';
import { con } from './Asset';





export const Contect = () => {
  return (
    <>
      <div className='row container-fluid' style={{ position: 'relative' }}>
        <div className='col-lg-12'>
          <div style={{ position: 'relative' }}>
            <img src={contect} alt="Responsive image" style={{ width: '1349px', height: '500px' }} />
            <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>Contect</h1>
            <h5 style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>Home/Contect</h5>
          </div>
        </div>
      </div>



      <div className='main-div-contect'>
        <div className='container contect'>
          <div className='row'>
            <div className='col-lg-6'>
              <h6 className='mb-5'>
                CONTACT US

              </h6>
              <h2>CONTACT WITH US
              </h2>
              <p>
                Rapidiously myocardinate cross-platform intellectual capital after the model. Appropriately create interactive infrastructures after maintance Holisticly facilitate stand-alone
              </p>
              <div className='contect-box'>
                <div className='contect-icon'>
                  <PhoneInTalkIcon />
                </div>
                <div className='contect-title'>
                  <h4>
                    Call Us Know
                  </h4>
                  <p>
                    +923008171000
                  </p>
                </div>

              </div>
              <hr />
              <div className='contect-box'>
                <div className='contect-icon'>
                  <PhoneInTalkIcon />
                </div>
                <div className='contect-title'>
                  <h4>
                    Call Us Know
                  </h4>
                  <p>
                    +923008171000
                  </p>
                </div>

              </div>
              <hr />

              <div className='contect-box'>
                <div className='contect-icon'>
                  <PhoneInTalkIcon />
                </div>
                <div className='contect-title'>
                  <h4>
                    Call Us Know
                  </h4>
                  <p>
                    +923008171000
                  </p>
                </div>

              </div>

            </div>
            <div className='col-lg-6 contect-form'>
              <form>
                <div className='single-contect-form'>
                  <h4>Get in touch</h4>
                  <div>
                    <FormControl fullWidth variant="outlined">
                      <div className='input-form'>
                        <TextField
                          label='Your Name'
                          variant='outlined'
                          fullWidth
                          className='material-ui-input'
                          size='large'
                        />
                      </div>
                    </FormControl>
                    <FormControl fullWidth variant="outlined">
                      <div className='input-form'>
                        <TextField
                          className='material-ui-input'
                          label='Enter Your Name Email'
                          variant='outlined'
                          fullWidth
                          sx={{ height: '60px', width: '100px' }} // Override height here
                        />
                      </div>
                    </FormControl>
                  </div>
                  <div className='input-form'>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="select-option-label">Select Option</InputLabel>
                      <Select
                        className='material-ui-input'
                        labelId="select-option-label"
                        label="Select Option"
                        fullWidth
                      >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                        <MenuItem value="option3">Option 3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className='input-form'>
                    <TextField
                      label='Message'
                      variant='outlined'
                      fullWidth
                      multiline
                      rows={4} // Adjust the number of rows as needed

                    />
                  </div>
                  <div className='input-form'>
                    <button type='submit' className='form-button'>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
