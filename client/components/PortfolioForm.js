import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

const PortfolioForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { control, register, handleSubmit, setValue } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          {...register("title", { required: true })}
          name="title"
          type="text"
          className="form-control"
          id="title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">Company</label>
        <input
          {...register("company", { required: true })}
          name="company"
          type="text"
          className="form-control"
          id="company"
        />
      </div>
      <div className="form-group">
        <label htmlFor="street">Location</label>
        <input
          {...register("location", { required: true })}
          name="location"
          type="text"
          className="form-control"
          id="location"
        />
      </div>

      <div className="form-group">
        <label htmlFor="street">Job Title</label>
        <input
          {...register("jobTitle", { required: true })}
          name="jobTitle"
          type="text"
          className="form-control"
          id="jobTitle"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          {...register("description", { required: true })}
          name="description"
          rows="5"
          type="text"
          className="form-control"
          id="description"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <div>
          <Controller
            control={control}
            name="startDate"
            render={({}) => (
              <DatePicker
                placeholderText="Select start date"
                onChange={(date) => {
                  setValue("startDate", date);
                  setStartDate(date);
                }}
                selected={startDate}
              />
            )}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <div>
          <Controller
            control={control}
            name="endDate"
            render={({}) => (
              <DatePicker
                disabled={!endDate}
                placeholderText="Select end date"
                onChange={(date) => {
                  setValue("endDate", date);
                  setEndDate(date);
                }}
                selected={endDate}
              />
            )}
          />
        </div>
      </div>
      <div className="form-group">
        {endDate && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              setValue("endDate", null);
              setEndDate(null);
            }}
          >
            Currently working
          </button>
        )}
        {!endDate && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              setValue("endDate", new Date());
              setEndDate(new Date());
            }}
          >
            Set End Date
          </button>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default PortfolioForm;
