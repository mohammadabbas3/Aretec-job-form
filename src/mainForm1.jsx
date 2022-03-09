import './App.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import MultipleSelectChip from './chipBtn'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

function MainForm() {
    let [submission, setSubmission] = useState(null)
    let [subError, setsubError] = useState(false)
    let [title, setTitle] = useState(null)
    let [titleError, setTitleError] = useState(false)
    let [address, setAddress] = useState(null)
    let [addressError, setAddressError] = useState(false)
    let [remote, setRemote] = useState('yes')
    let [remoteError, setRemoteError] = useState(false)
    let [days, setDays] = useState()
    let [daysError, setDaysError] = useState(false)
    let [contract, setContract] = useState(null)
    let [contractError, setcontractError] = useState(false)
    let [aretec, setAretec] = useState(null)
    let [aretecError, setAretecError] = useState(false)
    let [contract1, setContract1] = useState(null)
    let [contract1Error, setcontract1Error] = useState(false)
    let [timesheet, setTimesheet] = useState(null)
    let [timesheetError, setTimesheetError] = useState(false)
    let [salary, setSalary] = useState(null)
    let [salaryError, setSalaryError] = useState(false)
    let [position, setPosition] = useState(null)
    let [positionError, setPositionError] = useState(false)
    let [startDate, setStartDate] = useState(null)
    let [startDateError, setStartDateError] = useState(false)
    let [replacement, setReplacement] = useState('')
    let [replacementError, setReplacementError] = useState(false)
    let [newPos, setNewPos] = useState('')
    let [newPosError, setNewPosError] = useState(false)
    let [citizen, setCitizen] = useState(null)
    let [citizenError, setcitizenError] = useState(false)
    let [industry, setIndustry] = useState(null)
    let [industryError, setindustryError] = useState(false)



    const submitFunc = () => {
        if (!submission) {
            setsubError(true)
        } else {
            setsubError(false)
        }
        if (!title) {
            setTitleError(true)
        } else {
            setTitleError(false)
        }
        if (!position) {
            setPositionError(true)
        } else {
            setPositionError(false)
        }
        if (!address) {
            setAddressError(true)
        } else {
            setAddressError(false)
        }
        if (!remote) {
            setRemoteError(true)
        } else {
            setRemoteError(false)
        }
        if (!days && remote !== ('yes')) {
            setDaysError(true)
        } else {
            setDaysError(false)
        }
        if (!contract) {
            setcontractError(true)
        } else {
            setcontractError(false)
        }
        if (!aretec) {
            setAretecError(true)
        } else {
            setAretecError(false)
        }
        if (!contract1) {
            setcontract1Error(true)
        } else {
            setcontract1Error(false)
        }
        if (!timesheet) {
            setTimesheetError(true)
        } else {
            setTimesheetError(false)
        }
        if (!salary) {
            setSalaryError(true)
        } else {
            setSalaryError(false)
        }
        if (!position) {
            setPositionError(true)
        } else {
            setPositionError(false)
        }
        if (!startDate) {
            setStartDateError(true)
        } else {
            setStartDateError(false)
        }
        if (!replacement && newPos==('')) {
            setReplacementError(true)
        } else {
            setReplacementError(false)
        }
        if (!newPos && replacement==('')) {
            setNewPosError(true)
        } else {
            setNewPosError(false)
        }
        if (!citizen) {
            setcitizenError(true)
        } else {
            setcitizenError(false)
        }
        if (!industry) {
            setindustryError(true)
        } else {
            setindustryError(false)
        }
    }




    return (
        <div className="mainForm">
            <Box sx={{ width: '100%', maxWidth: 600 }}>
                <center><img src="./images/aretec.png" alt="logo" /></center>
                <Typography variant="h6" component="div" gutterBottom>
                    Job Requsition Form
                </Typography>
                <br />
                <div className='two_props'>
                    <TextField
                        required
                        id="date"
                        label="Anticipated Submission Date"
                        type="date"
                        sx={{
                            // mr: 5,
                            // display: "flex",
                            width: '49%'
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setSubmission(e.target.value)}
                        value={submission}
                        error={subError}
                    />
                    <TextField
                        sx={{ width: '49%' }}
                        required
                        type="text"
                        id="standard-required"
                        placeholder='Enter text'
                        label="Position Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        error={titleError}
                    />
                </div> <br />
                <Typography variant="h6" component="div" gutterBottom>
                    Work Location:
                </Typography>
                <TextField
                    required
                    fullWidth
                    multiline
                    rows={2}
                    type="text"
                    id="standard-required"
                    placeholder='Enter Text'
                    label="Onsite address (full address)"
                    variant="standard"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    error={addressError}
                /> <br /> <br />
                <div className='address'>
                    <FormControl sx={{ width: '45%' }}>
                        <InputLabel id="demo-simple-select-label">Remote 100%?</InputLabel>
                        <Select
                            required
                            variant='standard'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Remote 100%"
                            onChange={(e) => setRemote(e.target.value)}
                            value={remote}
                            error={remoteError}

                        >
                            <MenuItem value={'yes'}>yes</MenuItem>
                            <MenuItem value={'no'}>no</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        disabled={remote === ('yes') ? true : false}
                        type="text"
                        id="standard-required"
                        placeholder='Enter Text'
                        label="or days expected onsite"
                        variant="standard"
                        onChange={(e) => setDays(e.target.value)}
                        value={days}
                        error={daysError}
                    />
                </div>
                <br />
                <TextField
                    required
                    fullWidth
                    type="text"
                    id="standard-required"
                    placeholder='Enter Text'
                    label="Contract"
                    variant="standard"
                    onChange={(e) => setContract(e.target.value)}
                    value={contract}
                    error={contractError}
                /> <br /> <br />
                <Typography variant="h6" component="div" gutterBottom>
                    Program Manager
                </Typography>
                <TextField
                    required
                    fullWidth
                    type="text"
                    id="standard-required"
                    placeholder='Enter Text'
                    label="Aretec:"
                    variant="standard"
                    onChange={(e) => setAretec(e.target.value)}
                    value={aretec}
                    error={aretecError}
                /> <br /><br />
                <TextField
                    required
                    fullWidth
                    type="text"
                    id="standard-required"
                    placeholder='Enter Text'
                    label="Contract"
                    variant="standard"
                    onChange={(e) => setContract1(e.target.value)}
                    value={contract1}
                    error={contract1Error}
                /> <br /><br />
                <TextField
                    required
                    fullWidth
                    type="text"
                    id="standard-required"
                    placeholder='Enter Text'
                    label="Timesheet approver if differs from contract PM:"
                    variant="standard"
                    onChange={(e) => setTimesheet(e.target.value)}
                    value={timesheet}
                    error={timesheetError}
                /><br /><br />
                <TextField
                    required
                    fullWidth
                    type="text"
                    id="standard-required"
                    placeholder='e.g: 100k-120k'
                    label="Recommended salary range"
                    variant="standard"
                    onChange={(e) => setSalary(e.target.value)}
                    value={salary}
                    error={salaryError}
                /> <br /> <br />
                <div className='two_props'>
                    <FormControl className='widthcontrol' sx={{ width: '50%', mb: 5 }}>
                        <InputLabel required id="demo-simple-select-label">Position Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Position Status"
                            onChange={(e) => setPosition(e.target.value)}
                            value={position}
                            error={positionError}
                        >
                            <MenuItem value={'full_time'}>Full-Time</MenuItem>
                            <MenuItem value={'part_time'}>Part-Time</MenuItem>
                            <MenuItem value={'salaried'}>Salaried</MenuItem>
                            <MenuItem value={'hourly'}>Hourly</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        className='widthcontrol'
                        sx={{ mb: 5 }}
                        id="date"
                        label="Anticipated start Date"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setStartDate(e.target.value)}
                        value={startDate}
                        error={startDateError}
                    /></div>
                <Typography variant="caption" component="div" gutterBottom>
                    (job descriptions must be attached for all positions)
                </Typography>
                <TextField
                    // disabled={(newPos !== (null) || newPos !== ('')) ? false : true}
                    // disabled={newPos !== (null) ? true : false}
                    disabled={newPos !== ('') ? true : false}
                    fullWidth
                    type="text"
                    id="standard-required"
                    placeholder='Name of person being replaced'
                    label="Replacement position "
                    variant="standard"
                    onChange={(e) => setReplacement(e.target.value)}
                    value={replacement}
                    error={replacementError}
                /> <br /><br />
                <TextField
                    disabled={replacement !== ('') ? true : false}
                    fullWidth
                    type="text"
                    id="standard-required"
                    placeholder='job description attached'
                    label="New position"
                    variant="standard"
                    onChange={(e) => setNewPos(e.target.value)}
                    value={newPos}
                    error={newPosError}
                />
                <Typography variant="h6" component="div" gutterBottom>
                    Position information
                </Typography>
                <Typography variant="caption" component="div" gutterBottom>
                    (Identify any client specific needs ex::  Must be US citizen, no dual citizenship)
                </Typography>
                <TextField
                    required
                    fullWidth
                    multiline
                    rows={3}
                    type="text"
                    id="standard-required"
                    placeholder='Enter text'
                    label="Must be US Citizen and be able to get public trust Clearance"
                    variant="standard"
                    onChange={(e) => setCitizen(e.target.value)}
                    value={citizen}
                    error={citizenError}
                />
                <TextField
                    required
                    fullWidth
                    multiline
                    rows={2}
                    type="text"
                    id="standard-required"
                    placeholder='Enter text'
                    label="Specific industry background required: "
                    variant="standard"
                    onChange={(e) => setIndustry(e.target.value)}
                    value={industry}
                    error={industryError}
                />
                <br /> <br />
                <Button className='submit' onClick={submitFunc} fullWidth>Submit</Button>
            </Box>
        </div>
    );
}

export default MainForm;