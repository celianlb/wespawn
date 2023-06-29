import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import GoogleButton from "@/components/auth/GoogleButton";
import Head from "next/head";
import Input from "@/components/AuthInput";
import Button from "@/components/AuthButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const LoginFormSchema = z.object({
  email: z.string().email("Veuillez entrer un email valide"),
  password: z.string().min(1, "Mot de passe requis"),
});

type LoginFormInputs = z.infer<typeof LoginFormSchema>;

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginFormSchema),
  });
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const { email, password } = data;

    try {
      const res = await signIn("sanity-login", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        console.log(res);
        toast.error("Invalid email or password.");
        return;
      }

      router.push("/home");
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <Head>
        <title>WeSpawn - Espace de connexion</title>
      </Head>
      <div>
        <Header />
        <div className=" text-white grid-cols-1 md:grid-cols-2 mb-16">
          <div className="mx-auto flex flex-col justify-start gap-10 pt-16">
            <h2 className="text-center  font-montserratblack text-4xl font-bold">
              Connexion ou inscription
            </h2>
            <div className="flex justify-center">
              <GoogleButton />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

/**
 * <div className="flex items-center">
            <hr className="flex-grow border-t border-gray-300" />
            <p className="mx-4">ou</p>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
 <div>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
                <Button type="submit">Se connecter</Button>
              </div>
              <p className="mt-8 text-center">
                Vous n&apos;avez pas de compte ?{' '}
                <Link
                  href={'/auth/signup'}
                  className="font-medium dark:text-secondary"
                >
                  Inscrivez-vous
                </Link>
              </p>
            </form>
          </div>
 */
