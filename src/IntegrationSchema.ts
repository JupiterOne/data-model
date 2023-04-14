import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import AccessKeyJson from './schemas/AccessKey.json';
import AccessPolicyJson from './schemas/AccessPolicy.json';
import AccessRoleJson from './schemas/AccessRole.json';
import AccountJson from './schemas/Account.json';
import AlertJson from './schemas/Alert.json';
import ApplicationJson from './schemas/Application.json';
import ApplicationEndpointJson from './schemas/ApplicationEndpoint.json';
import AssessmentJson from './schemas/Assessment.json';
import AttackerJson from './schemas/Attacker.json';
import BackupJson from './schemas/Backup.json';
import CertificateJson from './schemas/Certificate.json';
import ChannelJson from './schemas/Channel.json';
import ClusterJson from './schemas/Cluster.json';
import CodeCommitJson from './schemas/CodeCommit.json';
import CodeDeployJson from './schemas/CodeDeploy.json';
import CodeModuleJson from './schemas/CodeModule.json';
import CodeRepoJson from './schemas/CodeRepo.json';
import CodeReviewJson from './schemas/CodeReview.json';
import ConfigurationJson from './schemas/Configuration.json';
import ContainerJson from './schemas/Container.json';
import ControlJson from './schemas/Control.json';
import ControlPolicyJson from './schemas/ControlPolicy.json';
import CryptoKeyJson from './schemas/CryptoKey.json';
import DatabaseJson from './schemas/Database.json';
import DataCollectionJson from './schemas/DataCollection.json';
import DataObjectJson from './schemas/DataObject.json';
import DataStoreJson from './schemas/DataStore.json';
import DeploymentJson from './schemas/Deployment.json';
import DeviceJson from './schemas/Device.json';
import DirectoryJson from './schemas/Directory.json';
import DiskJson from './schemas/Disk.json';
import DocumentJson from './schemas/Document.json';
import DomainJson from './schemas/Domain.json';
import DomainRecordJson from './schemas/DomainRecord.json';
import DomainZoneJson from './schemas/DomainZone.json';
import EntityJson from './schemas/Entity.json';
import FindingJson from './schemas/Finding.json';
import FirewallJson from './schemas/Firewall.json';
import FrameworkJson from './schemas/Framework.json';
import FunctionJson from './schemas/Function.json';
import GatewayJson from './schemas/Gateway.json';
import GraphObjectJson from './schemas/GraphObject.json';
import GroupJson from './schemas/Group.json';
import HostJson from './schemas/Host.json';
import HostAgentJson from './schemas/HostAgent.json';
import ImageJson from './schemas/Image.json';
import IncidentJson from './schemas/Incident.json';
import InternetJson from './schemas/Internet.json';
import IpAddressJson from './schemas/IpAddress.json';
import IssueJson from './schemas/Issue.json';
import KeyJson from './schemas/Key.json';
import LogsJson from './schemas/Logs.json';
import ModelJson from './schemas/Model.json';
import ModuleJson from './schemas/Module.json';
import NetworkJson from './schemas/Network.json';
import NetworkEndpointJson from './schemas/NetworkEndpoint.json';
import NetworkInterfaceJson from './schemas/NetworkInterface.json';
import OrganizationJson from './schemas/Organization.json';
import PasswordPolicyJson from './schemas/PasswordPolicy.json';
import PersonJson from './schemas/Person.json';
import PolicyJson from './schemas/Policy.json';
import PRJson from './schemas/PR.json';
import ProblemJson from './schemas/Problem.json';
import ProcedureJson from './schemas/Procedure.json';
import ProcessJson from './schemas/Process.json';
import ProductJson from './schemas/Product.json';
import ProgramJson from './schemas/Program.json';
import ProjectJson from './schemas/Project.json';
import QuestionJson from './schemas/Question.json';
import QueueJson from './schemas/Queue.json';
import RecordJson from './schemas/Record.json';
import RecordEntityJson from './schemas/RecordEntity.json';
import RepositoryJson from './schemas/Repository.json';
import RequirementJson from './schemas/Requirement.json';
import ResourceJson from './schemas/Resource.json';
import ReviewJson from './schemas/Review.json';
import RiskJson from './schemas/Risk.json';
import RootJson from './schemas/Root.json';
import RuleJson from './schemas/Rule.json';
import RulesetJson from './schemas/Ruleset.json';
import ScannerJson from './schemas/Scanner.json';
import SecretJson from './schemas/Secret.json';
import SectionJson from './schemas/Section.json';
import ServiceJson from './schemas/Service.json';
import SiteJson from './schemas/Site.json';
import StandardJson from './schemas/Standard.json';
import SubscriptionJson from './schemas/Subscription.json';
import TaskJson from './schemas/Task.json';
import TeamJson from './schemas/Team.json';
import ThreatIntelJson from './schemas/ThreatIntel.json';
import TrainingJson from './schemas/Training.json';
import UserJson from './schemas/User.json';
import UserGroupJson from './schemas/UserGroup.json';
import VaultJson from './schemas/Vault.json';
import VendorJson from './schemas/Vendor.json';
import VulnerabilityJson from './schemas/Vulnerability.json';
import WeaknessJson from './schemas/Weakness.json';
import WorkflowJson from './schemas/Workflow.json';
// Schema Imports : generated by tools/generate-schema-imports.sh
import WorkloadJson from './schemas/Workload.json';
export const Workload = WorkloadJson;
IntegrationSchema.addSchema(Workload);

import WorkflowJson from './schemas/Workflow.json';
export const Workflow = WorkflowJson;
IntegrationSchema.addSchema(Workflow);

import WeaknessJson from './schemas/Weakness.json';
export const Weakness = WeaknessJson;
IntegrationSchema.addSchema(Weakness);

import VulnerabilityJson from './schemas/Vulnerability.json';
export const Vulnerability = VulnerabilityJson;
IntegrationSchema.addSchema(Vulnerability);

import VendorJson from './schemas/Vendor.json';
export const Vendor = VendorJson;
IntegrationSchema.addSchema(Vendor);

import VaultJson from './schemas/Vault.json';
export const Vault = VaultJson;
IntegrationSchema.addSchema(Vault);

import UserGroupJson from './schemas/UserGroup.json';
export const UserGroup = UserGroupJson;
IntegrationSchema.addSchema(UserGroup);

import UserJson from './schemas/User.json';
export const User = UserJson;
IntegrationSchema.addSchema(User);

import TrainingJson from './schemas/Training.json';
export const Training = TrainingJson;
IntegrationSchema.addSchema(Training);

import ThreatIntelJson from './schemas/ThreatIntel.json';
export const ThreatIntel = ThreatIntelJson;
IntegrationSchema.addSchema(ThreatIntel);

import TeamJson from './schemas/Team.json';
export const Team = TeamJson;
IntegrationSchema.addSchema(Team);

import TaskJson from './schemas/Task.json';
export const Task = TaskJson;
IntegrationSchema.addSchema(Task);

import SubscriptionJson from './schemas/Subscription.json';
export const Subscription = SubscriptionJson;
IntegrationSchema.addSchema(Subscription);

import StandardJson from './schemas/Standard.json';
export const Standard = StandardJson;
IntegrationSchema.addSchema(Standard);

import SiteJson from './schemas/Site.json';
export const Site = SiteJson;
IntegrationSchema.addSchema(Site);

import ServiceJson from './schemas/Service.json';
export const Service = ServiceJson;
IntegrationSchema.addSchema(Service);

import SectionJson from './schemas/Section.json';
export const Section = SectionJson;
IntegrationSchema.addSchema(Section);

import SecretJson from './schemas/Secret.json';
export const Secret = SecretJson;
IntegrationSchema.addSchema(Secret);

import ScannerJson from './schemas/Scanner.json';
export const Scanner = ScannerJson;
IntegrationSchema.addSchema(Scanner);

import RulesetJson from './schemas/Ruleset.json';
export const Ruleset = RulesetJson;
IntegrationSchema.addSchema(Ruleset);

import RuleJson from './schemas/Rule.json';
export const Rule = RuleJson;
IntegrationSchema.addSchema(Rule);

import RootJson from './schemas/Root.json';
export const Root = RootJson;
IntegrationSchema.addSchema(Root);

import RiskJson from './schemas/Risk.json';
export const Risk = RiskJson;
IntegrationSchema.addSchema(Risk);

import ReviewJson from './schemas/Review.json';
export const Review = ReviewJson;
IntegrationSchema.addSchema(Review);

import ResourceJson from './schemas/Resource.json';
export const Resource = ResourceJson;
IntegrationSchema.addSchema(Resource);

import RequirementJson from './schemas/Requirement.json';
export const Requirement = RequirementJson;
IntegrationSchema.addSchema(Requirement);

import RepositoryJson from './schemas/Repository.json';
export const Repository = RepositoryJson;
IntegrationSchema.addSchema(Repository);

import RecordEntityJson from './schemas/RecordEntity.json';
export const RecordEntity = RecordEntityJson;
IntegrationSchema.addSchema(RecordEntity);

import RecordJson from './schemas/Record.json';
export const Record = RecordJson;
IntegrationSchema.addSchema(Record);

import QueueJson from './schemas/Queue.json';
export const Queue = QueueJson;
IntegrationSchema.addSchema(Queue);

import QuestionJson from './schemas/Question.json';
export const Question = QuestionJson;
IntegrationSchema.addSchema(Question);

import ProjectJson from './schemas/Project.json';
export const Project = ProjectJson;
IntegrationSchema.addSchema(Project);

import ProgramJson from './schemas/Program.json';
export const Program = ProgramJson;
IntegrationSchema.addSchema(Program);

import ProductJson from './schemas/Product.json';
export const Product = ProductJson;
IntegrationSchema.addSchema(Product);

import ProcessJson from './schemas/Process.json';
export const Process = ProcessJson;
IntegrationSchema.addSchema(Process);

import ProcedureJson from './schemas/Procedure.json';
export const Procedure = ProcedureJson;
IntegrationSchema.addSchema(Procedure);

import ProblemJson from './schemas/Problem.json';
export const Problem = ProblemJson;
IntegrationSchema.addSchema(Problem);

import PolicyJson from './schemas/Policy.json';
export const Policy = PolicyJson;
IntegrationSchema.addSchema(Policy);

import PersonJson from './schemas/Person.json';
export const Person = PersonJson;
IntegrationSchema.addSchema(Person);

import PasswordPolicyJson from './schemas/PasswordPolicy.json';
export const PasswordPolicy = PasswordPolicyJson;
IntegrationSchema.addSchema(PasswordPolicy);

import PRJson from './schemas/PR.json';
export const PR = PRJson;
IntegrationSchema.addSchema(PR);

import OrganizationJson from './schemas/Organization.json';
export const Organization = OrganizationJson;
IntegrationSchema.addSchema(Organization);

import NetworkInterfaceJson from './schemas/NetworkInterface.json';
export const NetworkInterface = NetworkInterfaceJson;
IntegrationSchema.addSchema(NetworkInterface);

import NetworkEndpointJson from './schemas/NetworkEndpoint.json';
export const NetworkEndpoint = NetworkEndpointJson;
IntegrationSchema.addSchema(NetworkEndpoint);

import NetworkJson from './schemas/Network.json';
export const Network = NetworkJson;
IntegrationSchema.addSchema(Network);

import ModuleJson from './schemas/Module.json';
export const Module = ModuleJson;
IntegrationSchema.addSchema(Module);

import ModelJson from './schemas/Model.json';
export const Model = ModelJson;
IntegrationSchema.addSchema(Model);

import LogsJson from './schemas/Logs.json';
export const Logs = LogsJson;
IntegrationSchema.addSchema(Logs);

import KeyJson from './schemas/Key.json';
export const Key = KeyJson;
IntegrationSchema.addSchema(Key);

import IssueJson from './schemas/Issue.json';
export const Issue = IssueJson;
IntegrationSchema.addSchema(Issue);

import IpAddressJson from './schemas/IpAddress.json';
export const IpAddress = IpAddressJson;
IntegrationSchema.addSchema(IpAddress);

import InternetJson from './schemas/Internet.json';
export const Internet = InternetJson;
IntegrationSchema.addSchema(Internet);

import IncidentJson from './schemas/Incident.json';
export const Incident = IncidentJson;
IntegrationSchema.addSchema(Incident);

import ImageJson from './schemas/Image.json';
export const Image = ImageJson;
IntegrationSchema.addSchema(Image);

import HostAgentJson from './schemas/HostAgent.json';
export const HostAgent = HostAgentJson;
IntegrationSchema.addSchema(HostAgent);

import HostJson from './schemas/Host.json';
export const Host = HostJson;
IntegrationSchema.addSchema(Host);

import GroupJson from './schemas/Group.json';
export const Group = GroupJson;
IntegrationSchema.addSchema(Group);

import GraphObjectJson from './schemas/GraphObject.json';
export const GraphObject = GraphObjectJson;
IntegrationSchema.addSchema(GraphObject);

import GatewayJson from './schemas/Gateway.json';
export const Gateway = GatewayJson;
IntegrationSchema.addSchema(Gateway);

import FunctionJson from './schemas/Function.json';
export const Function = FunctionJson;
IntegrationSchema.addSchema(Function);

import FrameworkJson from './schemas/Framework.json';
export const Framework = FrameworkJson;
IntegrationSchema.addSchema(Framework);

import FirewallJson from './schemas/Firewall.json';
export const Firewall = FirewallJson;
IntegrationSchema.addSchema(Firewall);

import FindingJson from './schemas/Finding.json';
export const Finding = FindingJson;
IntegrationSchema.addSchema(Finding);

import EntityJson from './schemas/Entity.json';
export const Entity = EntityJson;
IntegrationSchema.addSchema(Entity);

import DomainZoneJson from './schemas/DomainZone.json';
export const DomainZone = DomainZoneJson;
IntegrationSchema.addSchema(DomainZone);

import DomainRecordJson from './schemas/DomainRecord.json';
export const DomainRecord = DomainRecordJson;
IntegrationSchema.addSchema(DomainRecord);

import DomainJson from './schemas/Domain.json';
export const Domain = DomainJson;
IntegrationSchema.addSchema(Domain);

import DocumentJson from './schemas/Document.json';
export const Document = DocumentJson;
IntegrationSchema.addSchema(Document);

import DiskJson from './schemas/Disk.json';
export const Disk = DiskJson;
IntegrationSchema.addSchema(Disk);

import DirectoryJson from './schemas/Directory.json';
export const Directory = DirectoryJson;
IntegrationSchema.addSchema(Directory);

import DeviceJson from './schemas/Device.json';
export const Device = DeviceJson;
IntegrationSchema.addSchema(Device);

import DeploymentJson from './schemas/Deployment.json';
export const Deployment = DeploymentJson;
IntegrationSchema.addSchema(Deployment);

import DatabaseJson from './schemas/Database.json';
export const Database = DatabaseJson;
IntegrationSchema.addSchema(Database);

import DataStoreJson from './schemas/DataStore.json';
export const DataStore = DataStoreJson;
IntegrationSchema.addSchema(DataStore);

import DataObjectJson from './schemas/DataObject.json';
export const DataObject = DataObjectJson;
IntegrationSchema.addSchema(DataObject);

import DataCollectionJson from './schemas/DataCollection.json';
export const DataCollection = DataCollectionJson;
IntegrationSchema.addSchema(DataCollection);

import CryptoKeyJson from './schemas/CryptoKey.json';
export const CryptoKey = CryptoKeyJson;
IntegrationSchema.addSchema(CryptoKey);

import ControlPolicyJson from './schemas/ControlPolicy.json';
export const ControlPolicy = ControlPolicyJson;
IntegrationSchema.addSchema(ControlPolicy);

import ControlJson from './schemas/Control.json';
export const Control = ControlJson;
IntegrationSchema.addSchema(Control);

import ContainerJson from './schemas/Container.json';
export const Container = ContainerJson;
IntegrationSchema.addSchema(Container);

import ConfigurationJson from './schemas/Configuration.json';
export const Configuration = ConfigurationJson;
IntegrationSchema.addSchema(Configuration);

import CodeReviewJson from './schemas/CodeReview.json';
export const CodeReview = CodeReviewJson;
IntegrationSchema.addSchema(CodeReview);

import CodeRepoJson from './schemas/CodeRepo.json';
export const CodeRepo = CodeRepoJson;
IntegrationSchema.addSchema(CodeRepo);

import CodeModuleJson from './schemas/CodeModule.json';
export const CodeModule = CodeModuleJson;
IntegrationSchema.addSchema(CodeModule);

import CodeDeployJson from './schemas/CodeDeploy.json';
export const CodeDeploy = CodeDeployJson;
IntegrationSchema.addSchema(CodeDeploy);

import CodeCommitJson from './schemas/CodeCommit.json';
export const CodeCommit = CodeCommitJson;
IntegrationSchema.addSchema(CodeCommit);

import ClusterJson from './schemas/Cluster.json';
export const Cluster = ClusterJson;
IntegrationSchema.addSchema(Cluster);

import ChannelJson from './schemas/Channel.json';
export const Channel = ChannelJson;
IntegrationSchema.addSchema(Channel);

import CertificateJson from './schemas/Certificate.json';
export const Certificate = CertificateJson;
IntegrationSchema.addSchema(Certificate);

import BackupJson from './schemas/Backup.json';
export const Backup = BackupJson;
IntegrationSchema.addSchema(Backup);

import AttackerJson from './schemas/Attacker.json';
export const Attacker = AttackerJson;
IntegrationSchema.addSchema(Attacker);

import AssessmentJson from './schemas/Assessment.json';
export const Assessment = AssessmentJson;
IntegrationSchema.addSchema(Assessment);

import ApplicationEndpointJson from './schemas/ApplicationEndpoint.json';
export const ApplicationEndpoint = ApplicationEndpointJson;
IntegrationSchema.addSchema(ApplicationEndpoint);

import ApplicationJson from './schemas/Application.json';
export const Application = ApplicationJson;
IntegrationSchema.addSchema(Application);

import AlertJson from './schemas/Alert.json';
export const Alert = AlertJson;
IntegrationSchema.addSchema(Alert);

import AccountJson from './schemas/Account.json';
export const Account = AccountJson;
IntegrationSchema.addSchema(Account);

import AccessRoleJson from './schemas/AccessRole.json';
export const AccessRole = AccessRoleJson;
IntegrationSchema.addSchema(AccessRole);

import AccessPolicyJson from './schemas/AccessPolicy.json';
export const AccessPolicy = AccessPolicyJson;
IntegrationSchema.addSchema(AccessPolicy);

import AccessKeyJson from './schemas/AccessKey.json';
export const AccessKey = AccessKeyJson;
IntegrationSchema.addSchema(AccessKey);

