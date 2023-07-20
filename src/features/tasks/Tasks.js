import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section/index";
import { Header } from "../../common/Header";
import { Form } from "./Form";
import { TasksList } from "./TasksList";
import { Buttons } from "./Buttons";
import { Searchbar } from "./Searchbar";
import { Button } from "../../common/Button/styled";

function Tasks() {
	return (
		<>
			<Container>
				<Header title="To-do List" />
				<Section
					title="Add new task"
					extraHeaderContent={
						<Button>Download example tasks</Button>
					}
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
