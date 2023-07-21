import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section/index";
import { Header } from "../../common/Header";
import { Form } from "./Form";
import { TasksList } from "./TasksList";
import { Buttons } from "./Buttons";
import { Searchbar } from "./Searchbar";

function Tasks() {

	return (
		<>
			<Container>
				<Header title="To-do List" />
				<Section
					title="Add new task"
					body={<Form />}
				/>
				<Section
					title="Tasks"
					extraHeaderContent={
						<Buttons />
					}
					body={
						<>
							<Searchbar />
							<TasksList />
						</>
					}
				/>
			</Container>
		</>
	);
}

export default Tasks;
