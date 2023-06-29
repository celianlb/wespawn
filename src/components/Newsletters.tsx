import { useForm ,SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import { useState } from 'react';

const schema = z.object({
  email: z.string().email(),
});

type NewsletterFormInputs = z.infer<typeof schema>;

export default function NewsletterForm() {
  const [isChecked, setIsChecked] = useState(false);

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
        'Content-Type': 'application/json'
      }
    });

    const result = await res.json();
    console.log(result);

    reset();
    setSubscribed(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col lg:flex-row'>
        <div className="flex items-start flex-col mb-6 lg:mb-0 lg:mr-4">
          <input
            type="email"
            className="w-full mb-2 md:mb-4 pl-6 py-4 rounded-lg bg-var-grey text-white"
            placeholder="Adresse e-mail" {...register('email')}
          />
          {errors.email && <p>Entrer une adresse e-mail valide</p>}
          {subscribed}
          <div className='flex flex-row'>
            <input
              type="checkbox"
              className="mt-1 mr-2 align-top absolute"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <p className="text-white text-sm ml-5">
              En vous inscrivant à notre liste de diffusion, vous acceptez également nos mentions légales et notre politique de confidentialité.
            </p>
          </div>
        </div>
        <button
          type="submit"
          className={`uppercase flex flex-row px-4 py-4 h-fit w-fit font-rnssanzbold text-txt-btn-mobil bg-var-blue text-var-grey rounded-[100px] md:text-txt-btn-ds ${!isChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isChecked}
        >
          S&rsquo;abonner
          <Image
            src='/img/arrow-cta.svg'
            width={11}
            height={12}
            alt='Arrow CTA'
            className="pl-1 mt-[6px] md:mt-2"
          />
        </button>
      </form>
  );
}







