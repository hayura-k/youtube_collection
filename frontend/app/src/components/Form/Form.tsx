import { useForm } from 'react-hook-form';
import axios from 'axios';

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    backendRequest(data)
  };

  const backendRequest = (data) => {
    axios.post('http://localhost:3000/favorite_channels', data).then(res => {
      console.log(res)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register('favorite_channel[name]', { required: true })} />
        <input type="submit" value='送信' />
      </form>
    </>
  )
}
