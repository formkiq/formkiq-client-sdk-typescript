# WorkflowStepTransitionType

Defines the outcome of a workflow step transition.  A transition determines what happens after a workflow step finishes evaluating its conditions, decisions, or actions.  Depending on the transition type, the workflow may:  - Move to another workflow step - Complete successfully - Be rejected - Be cancelled - Remain on the current step  Some transition types require additional properties. For example, when the type is `STEP`, a target step identifier must be provided in the transition object. 

## Enum

* `Step` (value: `'STEP'`)

* `Retry` (value: `'RETRY'`)

* `Complete` (value: `'COMPLETE'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
