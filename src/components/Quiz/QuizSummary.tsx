// Libraries
import React, { useMemo } from "react"
import { Box, Flex, Text } from "@chakra-ui/react"

export interface IProps {
  correctCount: number
  questionCount: number
}

const QuizSummary: React.FC<IProps> = ({ correctCount, questionCount }) => {
  const percentCorrect = useMemo<number>(
    () => Math.floor((correctCount / questionCount) * 100),
    [correctCount, questionCount]
  )

  return (
    <Box w="full" mb={4}>
      <Text fontWeight={"700"} fontSize="2xl" textAlign="center">
        {percentCorrect >= 65 ? "You passed the quiz!" : "Your results"}
      </Text>
      <Flex
        p={4}
        justify="center"
        border="1px"
        bg="background"
        mx="auto"
        w="fit-content"
      >
        <Flex direction="column" p={4} alignItems="center" borderRight="1px">
          <Text fontWeight="700" fontSize="2xl" mb={2}>
            {percentCorrect}%
          </Text>
          <Text fontSize="s" m={0}>
            Score
          </Text>
        </Flex>
        <Flex direction="column" p={4} alignItems="center">
          <Text fontWeight="700" fontSize="2xl" mb={2}>
            +{correctCount}
          </Text>
          <Text fontSize="s" m={0}>
            Total points
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default QuizSummary
