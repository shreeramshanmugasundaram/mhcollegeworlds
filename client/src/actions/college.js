import * as api from "../api/index";
import {PROFILE} from "../constants/actionTypes";

export const getcolleges = (formData,navigate) => async (dispatch) => {
  try {
  await api.getcolleges(formData).then((response)=>{
    dispatch({ type: PROFILE, data:response.data });
      navigate("/profile" ,{state:formData})}
    ).catch((error)=>{
      navigate("/unauth")
    }
    );
  } catch (error) {
    alert("something went wrong will fetching college, Please try again after few minutes")
    console.log(error);
  }
};
