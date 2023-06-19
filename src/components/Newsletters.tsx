import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

type NewsletterFormInputs = z.infer<typeof schema>;

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Ajout de la fonction de réinitialisation du formulaire
  } = useForm<NewsletterFormInputs>({
    resolver: zodResolver(schema),
  });

  const [subscribed, setSubscribed] = useState(false); // Nouvel état pour gérer l'abonnement

  const onSubmit: SubmitHandler<NewsletterFormInputs> = async data => {
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await res.json();
    console.log(result);

    // Vider l'input et définir l'état "subscribed" sur "true"
    reset();
    setSubscribed(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='md:w-[50%]'>
      <input
        className='inp'
        type='email'
        placeholder='Adresse e-mail'
        {...register('email')}
      />
      {errors.email && <p>Entrer une adresse e-mail valide</p>}
      {subscribed && <p>Vous êtes maintenant abonné à notre newsletter</p>}
      <button
        className='bg-[#EAFE52] btn1 w-[88px] hover:bg-[#242629] hover:text-white font-rnssanz font-semibold'
        type='submit'
      >
        Envoyer
      </button>
      <style jsx>{`
        .inp {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 6px;
          margin-bottom: 16px;
          margin-right: 16px;
          position: relative;
          width: 70%;
          height: 51px;
          background-color: #242629;
          border-color: #242629;
        }

        .inp::placeholder {
          color: #fff;
          opacity: 0.3;
        }
      `}</style>
    </form>
  );
}
