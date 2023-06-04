
import useForm from 'components/hooks/useForm';

import TextField from 'components/TextField/TextField';

import fields from './fields';
import initialState from './initialState';
import css from "./userInfo.module.scss"

function UserInfo({ onSubmit }) {


  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });


const { name, email, phone, address } = state;
  return (
    <form className={css.userInfoForm} onSubmit={handleSubmit}>
      <TextField
        value={address}
        handleChange={handleChange}
        {...fields.address}
      />

      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField value={phone} handleChange={handleChange} {...fields.phone} />
      <TextField value={name} handleChange={handleChange} {...fields.name} />

      <button
        className={css.userInfoFormButton}
        type="submit"
        variant="contained"
        color="primary"
      >
        send
      </button>
    </form>
  );
}

export default UserInfo;
