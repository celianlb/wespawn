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
        <div className=" text-white mb-16">
          <div className="mx-auto flex flex-col justify-start gap-10 pt-16">
            <h2 className="text-center  font-montserratblack text-4xl font-bold">
              Connexion ou inscription
            </h2>
            <div className="">
              <form
                className="flex flex-col items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  id="email"
                  type="text"
                  placeholder="Adresse e-mail"
                  register={register("email")}
                  error={errors.email?.message}
              
                />
                <button
                  type="submit"
                  className="mt-8 uppercase flex w-full md:w-[675px] items-center rounded-[8px] text-var-grey font-rnssanzbold bg-var-blue py-4 px-6 justify-center"
                >
                  Continuer
                </button>
              </form>
            </div>
            <div className="flex flex-row items-center justify-center">
              <hr className=" border-t w-72 border-gray-300" />
              <p className="mx-4">ou</p>
              <hr className=" w-72 border-t border-gray-300" />
            </div>

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
 *
 */
