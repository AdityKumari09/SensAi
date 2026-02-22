"use client";

import { generatequiz } from "@/actions/interview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useFetch from "@/hooks/use-fetch";
import { useState } from "react";


const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showExplanation, setShowExplanation] = useState(false);

    const {
        loading: generateingQuiz,
        fn: generateQuizFn,
        data: quizData,
    } = useFetch(generatequiz);

    if (!quizData){
        return (
            <Card className="mx-2">
                <CardHeader>
                    <CardTitle>Ready to test your knowledge ?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        This quiz contains 10 questions specific to your industry 
                        and skills. Take your time and choose the best answer for each 
                        question.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Start Quiz</Button>
                </CardFooter>
            </Card>
        );
    }


  return (
    <div>Quiz</div>
  )
}

export default Quiz