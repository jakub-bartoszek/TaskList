import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section/index";
import { Header } from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TasksPage() {
	const { id } = useParams();
	const task = useSelector((state) => getTaskById(state, id));

	return (
		<>
			<Container>
				<Header title="Your Task" />
				<Section
					title={task.content}
					body={<>Done: {task.done ? "Yes" : "No"}</>}
				/>
			</Container>
		</>
	);
}

export default TasksPage;
