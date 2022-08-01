import { Button } from './Button';

export const ShowButtons = ({ }) => {

    return (
        <div>
            <Button
                type="button"
                buttonStyleSolid="button--primary--solid"
                buttonSize="button--large"
                children={"primary"}></Button>

            <Button
                type="button"
                buttonStyleSolid="button--secondary--solid"
                buttonSize="button--large"
                children={"secondary"}></Button>

            <Button
                type="button"
                buttonStyleSolid="button--success--solid"
                buttonSize="button--large"
                children={"success"}></Button>

            <Button
                type="button"
                buttonStyleSolid="button--info--solid"
                buttonSize="button--large"
                children={"info"}></Button>

            <Button
                type="button"
                buttonStyleSolid="button--warning--solid"
                buttonSize="button--large"
                children={"warning"}></Button>

            <Button
                type="button"
                buttonStyleSolid="button--danger--solid"
                buttonSize="button--large"
                children={"danger"}></Button>

            <Button
                type="button"
                buttonStyleSolid="button--primary--outline"
                buttonSize="button--large"
                children={"primary"}></Button>

            <Button
                type="button"
                buttonStyleSolid="button--secondary--outline"
                buttonSize="button--large"
                children={"secondary"}></Button>

            <Button
                type="button"
                buttonStyleSolid="button--success--outline"
                buttonSize="button--large"
                children={"success"}></Button>

            <Button
                type="button"
                buttonStyleSolid="button--info--outline"
                buttonSize="button--large"
                children={"info"}></Button>

            <Button
                type="button"
                buttonStyleSolid="button--warning--outline"
                buttonSize="button--large"
                children={"warning"}></Button>

            <Button
                type="button"
                buttonStyleSolid="button--danger--outline"
                buttonSize="button--large"
                children={"danger"}></Button>

        </div>
    );

}