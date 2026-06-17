import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { Alert } from "react-native";


const useSocialAuth = () => {
    const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null);
    const { startSSOFlow } = useSSO();

    const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {
        if (loadingStrategy) return;
        setLoadingStrategy(strategy);

        try {
            const { createdSessionId, setActive } = await startSSOFlow({ strategy });

            if (createdSessionId && setActive) {
                await setActive({ session: createdSessionId });
                console.log("Social auth successful")
                return;
            }

        } catch (error) {
            console.log("Error in social auth", error)
            Alert.alert("Error failed to sign in, please try again.")

        }
    }

    return {
        loadingStrategy,
        handleSocialAuth,
    }

}

export default useSocialAuth;