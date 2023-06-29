import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@/components/AuthInput";
import Button from "@/components/AuthButton";
import Link from "next/link";
import { signUp } from "next-auth-sanity/client";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import Head from "next/head";
import GoogleButton from "@/components/auth/GoogleButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const SignUpFormSchema = z.object({
  name: z.string().min(1, "Nom requis"),
  email: z.string().email("Veuillez entrer un email valide"),
  password: z.string().min(1, "Mot de passe requis"),
});

type SignUpFormInputs = z.infer<typeof SignUpFormSchema>;

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    resolver: zodResolver(SignUpFormSchema),
  });
  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    const { email, password, name } = data;

    const response = await signUp({
      email,
      password,
      name,
    });

    //@ts-ignore
    if (response.error) {
      //@ts-ignore
      if (response.error === "User already exist") {
        toast.error("Cet utilisateur existe déjà");
      } else {
        toast.error("Une erreur est survenue. Veuillez réessayer plus tard.");
      }
    } else {
      await signIn("sanity-login", {
        redirect: false,
        email,
        password,
      });
      router.push("/home");
    }
  };

  return (
    <>
      <Head>
        <title>Kulteo - Créez votre compte gratuitement</title>
        <meta
          name="description"
          content="Inscrivez-vous gratuitement sur Kulteo et plongez dans l'univers culturel.  Explorez notre sélection et vivez des moments culturels uniques."
        />
      </Head>
      <div>
        <Header />
        <div className=" text-white mb-16">
          <div className="mx-auto flex flex-col justify-start gap-10 pt-16">
            <h2 className="text-center  font-montserratblack text-4xl font-bold">
              Connexion ou inscription
            </h2>
            <div className="flex justify-center">
              <GoogleButton />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

/**
 <div className="flex items-center">
            <hr className="flex-grow border-t border-gray-300" />
            <p className="mx-4">ou</p>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

 <div>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <Input
                id="name"
                type="text"
                label="Votre nom"
                placeholder="Votre nom"
                register={register('name')}
                error={errors.name?.message}
              />
              <Input
                id="email"
                type="email"
                label="Adresse mail"
                placeholder="Votre adresse email"
                register={register('email')}
                error={errors.email?.message}
              />
              <Input
                id="password"
                type="password"
                label="Mot de passe"
                placeholder="Votre mot de passe"
                register={register('password')}
                error={errors.password?.message}
              />
              <div className="mt-8 flex items-center justify-center">
                <Button type="submit">S&apos;inscire</Button>
              </div>
              <p className="mt-8 text-center">
                Vous avez un compte ?{' '}
                <Link
                  href={'/auth/login'}
                  className="font-medium dark:text-secondary"
                >
                  Connectez-vous
                </Link>
              </p>
            </form>
          </div>
 */
